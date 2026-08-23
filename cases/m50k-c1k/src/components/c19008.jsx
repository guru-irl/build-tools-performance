import React from 'react';
const LABEL_19008 = 'component_19008';
export function Component19008({ value = 19008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19008, 'data-value': derived.doubled }, children);
}
export default Component19008;
