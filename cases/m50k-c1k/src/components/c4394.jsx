import React from 'react';
const LABEL_4394 = 'component_4394';
export function Component4394({ value = 4394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4394, 'data-value': derived.doubled }, children);
}
export default Component4394;
