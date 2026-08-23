import React from 'react';
const LABEL_46015 = 'component_46015';
export function Component46015({ value = 46015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46015, 'data-value': derived.doubled }, children);
}
export default Component46015;
