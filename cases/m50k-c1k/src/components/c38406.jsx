import React from 'react';
const LABEL_38406 = 'component_38406';
export function Component38406({ value = 38406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38406, 'data-value': derived.doubled }, children);
}
export default Component38406;
