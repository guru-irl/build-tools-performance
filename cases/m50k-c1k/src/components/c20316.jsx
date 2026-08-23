import React from 'react';
const LABEL_20316 = 'component_20316';
export function Component20316({ value = 20316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20316, 'data-value': derived.doubled }, children);
}
export default Component20316;
