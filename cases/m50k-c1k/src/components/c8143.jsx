import React from 'react';
const LABEL_8143 = 'component_8143';
export function Component8143({ value = 8143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8143, 'data-value': derived.doubled }, children);
}
export default Component8143;
