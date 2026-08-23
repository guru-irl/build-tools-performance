import React from 'react';
const LABEL_4632 = 'component_4632';
export function Component4632({ value = 4632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4632, 'data-value': derived.doubled }, children);
}
export default Component4632;
