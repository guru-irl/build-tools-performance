import React from 'react';
const LABEL_45228 = 'component_45228';
export function Component45228({ value = 45228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45228, 'data-value': derived.doubled }, children);
}
export default Component45228;
