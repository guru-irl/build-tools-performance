import React from 'react';
const LABEL_25610 = 'component_25610';
export function Component25610({ value = 25610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25610, 'data-value': derived.doubled }, children);
}
export default Component25610;
