import React from 'react';
const LABEL_14316 = 'component_14316';
export function Component14316({ value = 14316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14316, 'data-value': derived.doubled }, children);
}
export default Component14316;
