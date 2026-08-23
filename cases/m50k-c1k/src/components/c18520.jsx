import React from 'react';
const LABEL_18520 = 'component_18520';
export function Component18520({ value = 18520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18520, 'data-value': derived.doubled }, children);
}
export default Component18520;
