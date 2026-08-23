import React from 'react';
const LABEL_38544 = 'component_38544';
export function Component38544({ value = 38544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38544, 'data-value': derived.doubled }, children);
}
export default Component38544;
