import React from 'react';
const LABEL_1316 = 'component_1316';
export function Component1316({ value = 1316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1316, 'data-value': derived.doubled }, children);
}
export default Component1316;
