import React from 'react';
const LABEL_4302 = 'component_4302';
export function Component4302({ value = 4302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4302, 'data-value': derived.doubled }, children);
}
export default Component4302;
