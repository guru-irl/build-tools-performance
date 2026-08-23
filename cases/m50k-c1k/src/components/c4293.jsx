import React from 'react';
const LABEL_4293 = 'component_4293';
export function Component4293({ value = 4293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4293, 'data-value': derived.doubled }, children);
}
export default Component4293;
