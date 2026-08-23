import React from 'react';
const LABEL_15005 = 'component_15005';
export function Component15005({ value = 15005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15005, 'data-value': derived.doubled }, children);
}
export default Component15005;
