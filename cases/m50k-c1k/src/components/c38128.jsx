import React from 'react';
const LABEL_38128 = 'component_38128';
export function Component38128({ value = 38128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38128, 'data-value': derived.doubled }, children);
}
export default Component38128;
