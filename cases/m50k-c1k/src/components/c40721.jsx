import React from 'react';
const LABEL_40721 = 'component_40721';
export function Component40721({ value = 40721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40721, 'data-value': derived.doubled }, children);
}
export default Component40721;
