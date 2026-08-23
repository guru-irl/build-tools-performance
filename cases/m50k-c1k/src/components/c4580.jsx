import React from 'react';
const LABEL_4580 = 'component_4580';
export function Component4580({ value = 4580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4580, 'data-value': derived.doubled }, children);
}
export default Component4580;
