import React from 'react';
const LABEL_2183 = 'component_2183';
export function Component2183({ value = 2183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2183, 'data-value': derived.doubled }, children);
}
export default Component2183;
