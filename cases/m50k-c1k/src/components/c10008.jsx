import React from 'react';
const LABEL_10008 = 'component_10008';
export function Component10008({ value = 10008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10008, 'data-value': derived.doubled }, children);
}
export default Component10008;
