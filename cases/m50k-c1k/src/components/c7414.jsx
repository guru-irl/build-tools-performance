import React from 'react';
const LABEL_7414 = 'component_7414';
export function Component7414({ value = 7414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7414, 'data-value': derived.doubled }, children);
}
export default Component7414;
