import React from 'react';
const LABEL_31414 = 'component_31414';
export function Component31414({ value = 31414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31414, 'data-value': derived.doubled }, children);
}
export default Component31414;
