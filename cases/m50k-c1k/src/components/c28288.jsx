import React from 'react';
const LABEL_28288 = 'component_28288';
export function Component28288({ value = 28288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28288, 'data-value': derived.doubled }, children);
}
export default Component28288;
