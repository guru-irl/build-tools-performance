import React from 'react';
const LABEL_44589 = 'component_44589';
export function Component44589({ value = 44589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44589, 'data-value': derived.doubled }, children);
}
export default Component44589;
