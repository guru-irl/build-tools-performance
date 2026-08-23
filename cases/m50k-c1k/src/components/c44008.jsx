import React from 'react';
const LABEL_44008 = 'component_44008';
export function Component44008({ value = 44008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44008, 'data-value': derived.doubled }, children);
}
export default Component44008;
