import React from 'react';
const LABEL_39843 = 'component_39843';
export function Component39843({ value = 39843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39843, 'data-value': derived.doubled }, children);
}
export default Component39843;
