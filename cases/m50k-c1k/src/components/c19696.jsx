import React from 'react';
const LABEL_19696 = 'component_19696';
export function Component19696({ value = 19696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19696, 'data-value': derived.doubled }, children);
}
export default Component19696;
