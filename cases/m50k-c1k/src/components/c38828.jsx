import React from 'react';
const LABEL_38828 = 'component_38828';
export function Component38828({ value = 38828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38828, 'data-value': derived.doubled }, children);
}
export default Component38828;
