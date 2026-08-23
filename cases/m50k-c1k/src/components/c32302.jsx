import React from 'react';
const LABEL_32302 = 'component_32302';
export function Component32302({ value = 32302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32302, 'data-value': derived.doubled }, children);
}
export default Component32302;
