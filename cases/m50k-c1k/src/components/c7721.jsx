import React from 'react';
const LABEL_7721 = 'component_7721';
export function Component7721({ value = 7721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7721, 'data-value': derived.doubled }, children);
}
export default Component7721;
