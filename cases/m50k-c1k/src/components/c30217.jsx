import React from 'react';
const LABEL_30217 = 'component_30217';
export function Component30217({ value = 30217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30217, 'data-value': derived.doubled }, children);
}
export default Component30217;
