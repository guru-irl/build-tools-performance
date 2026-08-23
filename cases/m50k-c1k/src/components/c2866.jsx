import React from 'react';
const LABEL_2866 = 'component_2866';
export function Component2866({ value = 2866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2866, 'data-value': derived.doubled }, children);
}
export default Component2866;
