import React from 'react';
const LABEL_3843 = 'component_3843';
export function Component3843({ value = 3843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3843, 'data-value': derived.doubled }, children);
}
export default Component3843;
