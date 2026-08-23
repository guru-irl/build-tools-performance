import React from 'react';
const LABEL_2221 = 'component_2221';
export function Component2221({ value = 2221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2221, 'data-value': derived.doubled }, children);
}
export default Component2221;
