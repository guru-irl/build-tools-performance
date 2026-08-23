import React from 'react';
const LABEL_38302 = 'component_38302';
export function Component38302({ value = 38302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38302, 'data-value': derived.doubled }, children);
}
export default Component38302;
