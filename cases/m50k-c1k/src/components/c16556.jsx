import React from 'react';
const LABEL_16556 = 'component_16556';
export function Component16556({ value = 16556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16556, 'data-value': derived.doubled }, children);
}
export default Component16556;
