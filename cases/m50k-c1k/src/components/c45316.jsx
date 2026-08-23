import React from 'react';
const LABEL_45316 = 'component_45316';
export function Component45316({ value = 45316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45316, 'data-value': derived.doubled }, children);
}
export default Component45316;
