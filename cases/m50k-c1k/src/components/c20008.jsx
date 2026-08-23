import React from 'react';
const LABEL_20008 = 'component_20008';
export function Component20008({ value = 20008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20008, 'data-value': derived.doubled }, children);
}
export default Component20008;
