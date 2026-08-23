import React from 'react';
const LABEL_26996 = 'component_26996';
export function Component26996({ value = 26996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26996, 'data-value': derived.doubled }, children);
}
export default Component26996;
