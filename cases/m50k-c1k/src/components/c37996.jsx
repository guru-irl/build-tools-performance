import React from 'react';
const LABEL_37996 = 'component_37996';
export function Component37996({ value = 37996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37996, 'data-value': derived.doubled }, children);
}
export default Component37996;
