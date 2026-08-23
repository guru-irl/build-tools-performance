import React from 'react';
const LABEL_35589 = 'component_35589';
export function Component35589({ value = 35589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35589, 'data-value': derived.doubled }, children);
}
export default Component35589;
