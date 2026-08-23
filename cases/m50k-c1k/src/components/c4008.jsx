import React from 'react';
const LABEL_4008 = 'component_4008';
export function Component4008({ value = 4008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4008, 'data-value': derived.doubled }, children);
}
export default Component4008;
