import React from 'react';
const LABEL_19221 = 'component_19221';
export function Component19221({ value = 19221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19221, 'data-value': derived.doubled }, children);
}
export default Component19221;
