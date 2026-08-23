import React from 'react';
const LABEL_3316 = 'component_3316';
export function Component3316({ value = 3316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3316, 'data-value': derived.doubled }, children);
}
export default Component3316;
