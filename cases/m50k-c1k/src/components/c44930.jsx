import React from 'react';
const LABEL_44930 = 'component_44930';
export function Component44930({ value = 44930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44930, 'data-value': derived.doubled }, children);
}
export default Component44930;
