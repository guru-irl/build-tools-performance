import React from 'react';
const LABEL_38996 = 'component_38996';
export function Component38996({ value = 38996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38996, 'data-value': derived.doubled }, children);
}
export default Component38996;
