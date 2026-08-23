import React from 'react';
const LABEL_18011 = 'component_18011';
export function Component18011({ value = 18011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18011, 'data-value': derived.doubled }, children);
}
export default Component18011;
