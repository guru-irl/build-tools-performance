import React from 'react';
const LABEL_44584 = 'component_44584';
export function Component44584({ value = 44584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44584, 'data-value': derived.doubled }, children);
}
export default Component44584;
