import React from 'react';
const LABEL_38547 = 'component_38547';
export function Component38547({ value = 38547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38547, 'data-value': derived.doubled }, children);
}
export default Component38547;
