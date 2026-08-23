import React from 'react';
const LABEL_6316 = 'component_6316';
export function Component6316({ value = 6316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6316, 'data-value': derived.doubled }, children);
}
export default Component6316;
