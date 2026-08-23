import React from 'react';
const LABEL_29544 = 'component_29544';
export function Component29544({ value = 29544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29544, 'data-value': derived.doubled }, children);
}
export default Component29544;
