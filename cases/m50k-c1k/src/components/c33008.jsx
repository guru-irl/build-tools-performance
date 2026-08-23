import React from 'react';
const LABEL_33008 = 'component_33008';
export function Component33008({ value = 33008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33008, 'data-value': derived.doubled }, children);
}
export default Component33008;
