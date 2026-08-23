import React from 'react';
const LABEL_4415 = 'component_4415';
export function Component4415({ value = 4415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4415, 'data-value': derived.doubled }, children);
}
export default Component4415;
