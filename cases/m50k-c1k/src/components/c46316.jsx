import React from 'react';
const LABEL_46316 = 'component_46316';
export function Component46316({ value = 46316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46316, 'data-value': derived.doubled }, children);
}
export default Component46316;
