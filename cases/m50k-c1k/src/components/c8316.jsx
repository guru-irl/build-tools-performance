import React from 'react';
const LABEL_8316 = 'component_8316';
export function Component8316({ value = 8316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8316, 'data-value': derived.doubled }, children);
}
export default Component8316;
